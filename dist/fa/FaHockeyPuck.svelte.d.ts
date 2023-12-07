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
export type FaHockeyPuckProps = typeof __propDef.props;
export type FaHockeyPuckEvents = typeof __propDef.events;
export type FaHockeyPuckSlots = typeof __propDef.slots;
export default class FaHockeyPuck extends SvelteComponentTyped<FaHockeyPuckProps, FaHockeyPuckEvents, FaHockeyPuckSlots> {
}
export {};
