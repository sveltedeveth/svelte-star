import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IoMdCloudUploadProps = typeof __propDef.props;
export type IoMdCloudUploadEvents = typeof __propDef.events;
export type IoMdCloudUploadSlots = typeof __propDef.slots;
export default class IoMdCloudUpload extends SvelteComponentTyped<IoMdCloudUploadProps, IoMdCloudUploadEvents, IoMdCloudUploadSlots> {
}
export {};
