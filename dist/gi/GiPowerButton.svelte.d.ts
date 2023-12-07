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
export type GiPowerButtonProps = typeof __propDef.props;
export type GiPowerButtonEvents = typeof __propDef.events;
export type GiPowerButtonSlots = typeof __propDef.slots;
export default class GiPowerButton extends SvelteComponentTyped<GiPowerButtonProps, GiPowerButtonEvents, GiPowerButtonSlots> {
}
export {};
