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
export type FaUserCircleProps = typeof __propDef.props;
export type FaUserCircleEvents = typeof __propDef.events;
export type FaUserCircleSlots = typeof __propDef.slots;
export default class FaUserCircle extends SvelteComponentTyped<FaUserCircleProps, FaUserCircleEvents, FaUserCircleSlots> {
}
export {};
