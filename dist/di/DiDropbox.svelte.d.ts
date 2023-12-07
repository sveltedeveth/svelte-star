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
export type DiDropboxProps = typeof __propDef.props;
export type DiDropboxEvents = typeof __propDef.events;
export type DiDropboxSlots = typeof __propDef.slots;
export default class DiDropbox extends SvelteComponentTyped<DiDropboxProps, DiDropboxEvents, DiDropboxSlots> {
}
export {};
