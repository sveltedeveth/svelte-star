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
export type FaBandAidProps = typeof __propDef.props;
export type FaBandAidEvents = typeof __propDef.events;
export type FaBandAidSlots = typeof __propDef.slots;
export default class FaBandAid extends SvelteComponentTyped<FaBandAidProps, FaBandAidEvents, FaBandAidSlots> {
}
export {};
