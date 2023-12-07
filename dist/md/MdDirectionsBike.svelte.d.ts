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
export type MdDirectionsBikeProps = typeof __propDef.props;
export type MdDirectionsBikeEvents = typeof __propDef.events;
export type MdDirectionsBikeSlots = typeof __propDef.slots;
export default class MdDirectionsBike extends SvelteComponentTyped<MdDirectionsBikeProps, MdDirectionsBikeEvents, MdDirectionsBikeSlots> {
}
export {};
