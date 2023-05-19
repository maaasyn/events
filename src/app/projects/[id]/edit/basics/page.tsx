import { Basics } from "@/components/client/create-gather-steps/Basics";

export default async function CreateGather(props: { params: { id: string } }) {
  return <Basics id={props.params.id} />;
}
