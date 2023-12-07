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
export type GiTankTreadProps = typeof __propDef.props;
export type GiTankTreadEvents = typeof __propDef.events;
export type GiTankTreadSlots = typeof __propDef.slots;
export default class GiTankTread extends SvelteComponentTyped<GiTankTreadProps, GiTankTreadEvents, GiTankTreadSlots> {
}
export {};
