import { useEffect, useState } from "react";

type UseImageReturn = {
  loading: boolean;
  error: Error | null;
  image: string | undefined;
};

const useImage = (fileName: string): UseImageReturn => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [image, setImage] = useState<string | undefined>(undefined);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/images/${fileName}`);
        setImage(response.default);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, [fileName]);
  return { loading, error, image };
};
export default useImage;
