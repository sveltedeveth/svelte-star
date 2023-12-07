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
export type GiSunriseProps = typeof __propDef.props;
export type GiSunriseEvents = typeof __propDef.events;
export type GiSunriseSlots = typeof __propDef.slots;
export default class GiSunrise extends SvelteComponentTyped<GiSunriseProps, GiSunriseEvents, GiSunriseSlots> {
}
export {};
