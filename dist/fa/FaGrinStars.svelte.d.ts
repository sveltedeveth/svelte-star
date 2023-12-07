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
export type FaGrinStarsProps = typeof __propDef.props;
export type FaGrinStarsEvents = typeof __propDef.events;
export type FaGrinStarsSlots = typeof __propDef.slots;
export default class FaGrinStars extends SvelteComponentTyped<FaGrinStarsProps, FaGrinStarsEvents, FaGrinStarsSlots> {
}
export {};
