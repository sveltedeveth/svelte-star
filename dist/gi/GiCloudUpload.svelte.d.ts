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
export type GiCloudUploadProps = typeof __propDef.props;
export type GiCloudUploadEvents = typeof __propDef.events;
export type GiCloudUploadSlots = typeof __propDef.slots;
export default class GiCloudUpload extends SvelteComponentTyped<GiCloudUploadProps, GiCloudUploadEvents, GiCloudUploadSlots> {
}
export {};
