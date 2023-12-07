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
export type DiNetmagazineProps = typeof __propDef.props;
export type DiNetmagazineEvents = typeof __propDef.events;
export type DiNetmagazineSlots = typeof __propDef.slots;
export default class DiNetmagazine extends SvelteComponentTyped<DiNetmagazineProps, DiNetmagazineEvents, DiNetmagazineSlots> {
}
export {};
