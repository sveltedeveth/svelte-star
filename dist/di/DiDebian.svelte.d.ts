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
export type DiDebianProps = typeof __propDef.props;
export type DiDebianEvents = typeof __propDef.events;
export type DiDebianSlots = typeof __propDef.slots;
export default class DiDebian extends SvelteComponentTyped<DiDebianProps, DiDebianEvents, DiDebianSlots> {
}
export {};
