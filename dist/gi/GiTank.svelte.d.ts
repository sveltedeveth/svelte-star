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
export type GiTankProps = typeof __propDef.props;
export type GiTankEvents = typeof __propDef.events;
export type GiTankSlots = typeof __propDef.slots;
export default class GiTank extends SvelteComponentTyped<GiTankProps, GiTankEvents, GiTankSlots> {
}
export {};
