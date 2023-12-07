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
export type FaGrinWinkProps = typeof __propDef.props;
export type FaGrinWinkEvents = typeof __propDef.events;
export type FaGrinWinkSlots = typeof __propDef.slots;
export default class FaGrinWink extends SvelteComponentTyped<FaGrinWinkProps, FaGrinWinkEvents, FaGrinWinkSlots> {
}
export {};
