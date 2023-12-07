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
export type GoCloudDownloadProps = typeof __propDef.props;
export type GoCloudDownloadEvents = typeof __propDef.events;
export type GoCloudDownloadSlots = typeof __propDef.slots;
export default class GoCloudDownload extends SvelteComponentTyped<GoCloudDownloadProps, GoCloudDownloadEvents, GoCloudDownloadSlots> {
}
export {};
