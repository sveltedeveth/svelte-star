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
export type GiDefibrilateProps = typeof __propDef.props;
export type GiDefibrilateEvents = typeof __propDef.events;
export type GiDefibrilateSlots = typeof __propDef.slots;
export default class GiDefibrilate extends SvelteComponentTyped<GiDefibrilateProps, GiDefibrilateEvents, GiDefibrilateSlots> {
}
export {};
