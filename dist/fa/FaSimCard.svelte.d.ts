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
export type FaSimCardProps = typeof __propDef.props;
export type FaSimCardEvents = typeof __propDef.events;
export type FaSimCardSlots = typeof __propDef.slots;
export default class FaSimCard extends SvelteComponentTyped<FaSimCardProps, FaSimCardEvents, FaSimCardSlots> {
}
export {};
