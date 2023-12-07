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
export type FaUserAstronautProps = typeof __propDef.props;
export type FaUserAstronautEvents = typeof __propDef.events;
export type FaUserAstronautSlots = typeof __propDef.slots;
export default class FaUserAstronaut extends SvelteComponentTyped<FaUserAstronautProps, FaUserAstronautEvents, FaUserAstronautSlots> {
}
export {};
