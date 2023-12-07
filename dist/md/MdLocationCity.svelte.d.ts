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
export type MdLocationCityProps = typeof __propDef.props;
export type MdLocationCityEvents = typeof __propDef.events;
export type MdLocationCitySlots = typeof __propDef.slots;
export default class MdLocationCity extends SvelteComponentTyped<MdLocationCityProps, MdLocationCityEvents, MdLocationCitySlots> {
}
export {};
