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
export type MdNearMeProps = typeof __propDef.props;
export type MdNearMeEvents = typeof __propDef.events;
export type MdNearMeSlots = typeof __propDef.slots;
export default class MdNearMe extends SvelteComponentTyped<MdNearMeProps, MdNearMeEvents, MdNearMeSlots> {
}
export {};
