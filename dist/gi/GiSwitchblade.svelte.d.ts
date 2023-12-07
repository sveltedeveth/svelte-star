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
export type GiSwitchbladeProps = typeof __propDef.props;
export type GiSwitchbladeEvents = typeof __propDef.events;
export type GiSwitchbladeSlots = typeof __propDef.slots;
export default class GiSwitchblade extends SvelteComponentTyped<GiSwitchbladeProps, GiSwitchbladeEvents, GiSwitchbladeSlots> {
}
export {};
