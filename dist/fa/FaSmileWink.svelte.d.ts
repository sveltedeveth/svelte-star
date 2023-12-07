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
export type FaSmileWinkProps = typeof __propDef.props;
export type FaSmileWinkEvents = typeof __propDef.events;
export type FaSmileWinkSlots = typeof __propDef.slots;
export default class FaSmileWink extends SvelteComponentTyped<FaSmileWinkProps, FaSmileWinkEvents, FaSmileWinkSlots> {
}
export {};
