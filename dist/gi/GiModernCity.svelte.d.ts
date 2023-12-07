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
export type GiModernCityProps = typeof __propDef.props;
export type GiModernCityEvents = typeof __propDef.events;
export type GiModernCitySlots = typeof __propDef.slots;
export default class GiModernCity extends SvelteComponentTyped<GiModernCityProps, GiModernCityEvents, GiModernCitySlots> {
}
export {};
