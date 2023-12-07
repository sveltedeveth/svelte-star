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
export type GoDeviceMobileProps = typeof __propDef.props;
export type GoDeviceMobileEvents = typeof __propDef.events;
export type GoDeviceMobileSlots = typeof __propDef.slots;
export default class GoDeviceMobile extends SvelteComponentTyped<GoDeviceMobileProps, GoDeviceMobileEvents, GoDeviceMobileSlots> {
}
export {};
