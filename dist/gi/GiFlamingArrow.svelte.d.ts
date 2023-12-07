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
export type GiFlamingArrowProps = typeof __propDef.props;
export type GiFlamingArrowEvents = typeof __propDef.events;
export type GiFlamingArrowSlots = typeof __propDef.slots;
export default class GiFlamingArrow extends SvelteComponentTyped<GiFlamingArrowProps, GiFlamingArrowEvents, GiFlamingArrowSlots> {
}
export {};
