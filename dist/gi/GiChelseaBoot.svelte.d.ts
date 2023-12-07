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
export type GiChelseaBootProps = typeof __propDef.props;
export type GiChelseaBootEvents = typeof __propDef.events;
export type GiChelseaBootSlots = typeof __propDef.slots;
export default class GiChelseaBoot extends SvelteComponentTyped<GiChelseaBootProps, GiChelseaBootEvents, GiChelseaBootSlots> {
}
export {};
