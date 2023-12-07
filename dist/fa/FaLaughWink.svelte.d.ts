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
export type FaLaughWinkProps = typeof __propDef.props;
export type FaLaughWinkEvents = typeof __propDef.events;
export type FaLaughWinkSlots = typeof __propDef.slots;
export default class FaLaughWink extends SvelteComponentTyped<FaLaughWinkProps, FaLaughWinkEvents, FaLaughWinkSlots> {
}
export {};
