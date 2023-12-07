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
export type GiLaserWarningProps = typeof __propDef.props;
export type GiLaserWarningEvents = typeof __propDef.events;
export type GiLaserWarningSlots = typeof __propDef.slots;
export default class GiLaserWarning extends SvelteComponentTyped<GiLaserWarningProps, GiLaserWarningEvents, GiLaserWarningSlots> {
}
export {};
