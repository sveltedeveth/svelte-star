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
export type GiPaintRollerProps = typeof __propDef.props;
export type GiPaintRollerEvents = typeof __propDef.events;
export type GiPaintRollerSlots = typeof __propDef.slots;
export default class GiPaintRoller extends SvelteComponentTyped<GiPaintRollerProps, GiPaintRollerEvents, GiPaintRollerSlots> {
}
export {};
