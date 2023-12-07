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
export type GiSunsetProps = typeof __propDef.props;
export type GiSunsetEvents = typeof __propDef.events;
export type GiSunsetSlots = typeof __propDef.slots;
export default class GiSunset extends SvelteComponentTyped<GiSunsetProps, GiSunsetEvents, GiSunsetSlots> {
}
export {};
