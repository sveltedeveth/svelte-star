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
export type GiFelineProps = typeof __propDef.props;
export type GiFelineEvents = typeof __propDef.events;
export type GiFelineSlots = typeof __propDef.slots;
export default class GiFeline extends SvelteComponentTyped<GiFelineProps, GiFelineEvents, GiFelineSlots> {
}
export {};
