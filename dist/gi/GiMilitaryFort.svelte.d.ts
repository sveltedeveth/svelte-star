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
export type GiMilitaryFortProps = typeof __propDef.props;
export type GiMilitaryFortEvents = typeof __propDef.events;
export type GiMilitaryFortSlots = typeof __propDef.slots;
export default class GiMilitaryFort extends SvelteComponentTyped<GiMilitaryFortProps, GiMilitaryFortEvents, GiMilitaryFortSlots> {
}
export {};
