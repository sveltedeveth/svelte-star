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
export type DiRedhatProps = typeof __propDef.props;
export type DiRedhatEvents = typeof __propDef.events;
export type DiRedhatSlots = typeof __propDef.slots;
export default class DiRedhat extends SvelteComponentTyped<DiRedhatProps, DiRedhatEvents, DiRedhatSlots> {
}
export {};
