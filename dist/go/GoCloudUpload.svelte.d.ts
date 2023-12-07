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
export type GoCloudUploadProps = typeof __propDef.props;
export type GoCloudUploadEvents = typeof __propDef.events;
export type GoCloudUploadSlots = typeof __propDef.slots;
export default class GoCloudUpload extends SvelteComponentTyped<GoCloudUploadProps, GoCloudUploadEvents, GoCloudUploadSlots> {
}
export {};
