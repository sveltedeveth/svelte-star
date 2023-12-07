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
export type FaFrogProps = typeof __propDef.props;
export type FaFrogEvents = typeof __propDef.events;
export type FaFrogSlots = typeof __propDef.slots;
export default class FaFrog extends SvelteComponentTyped<FaFrogProps, FaFrogEvents, FaFrogSlots> {
}
export {};
