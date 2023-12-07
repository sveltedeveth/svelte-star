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
export type GiSightDisabledProps = typeof __propDef.props;
export type GiSightDisabledEvents = typeof __propDef.events;
export type GiSightDisabledSlots = typeof __propDef.slots;
export default class GiSightDisabled extends SvelteComponentTyped<GiSightDisabledProps, GiSightDisabledEvents, GiSightDisabledSlots> {
}
export {};
