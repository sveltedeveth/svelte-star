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
export type GiSwordsPowerProps = typeof __propDef.props;
export type GiSwordsPowerEvents = typeof __propDef.events;
export type GiSwordsPowerSlots = typeof __propDef.slots;
export default class GiSwordsPower extends SvelteComponentTyped<GiSwordsPowerProps, GiSwordsPowerEvents, GiSwordsPowerSlots> {
}
export {};
