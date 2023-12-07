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
export type FaHackerrankProps = typeof __propDef.props;
export type FaHackerrankEvents = typeof __propDef.events;
export type FaHackerrankSlots = typeof __propDef.slots;
export default class FaHackerrank extends SvelteComponentTyped<FaHackerrankProps, FaHackerrankEvents, FaHackerrankSlots> {
}
export {};
