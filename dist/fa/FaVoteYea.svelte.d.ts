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
export type FaVoteYeaProps = typeof __propDef.props;
export type FaVoteYeaEvents = typeof __propDef.events;
export type FaVoteYeaSlots = typeof __propDef.slots;
export default class FaVoteYea extends SvelteComponentTyped<FaVoteYeaProps, FaVoteYeaEvents, FaVoteYeaSlots> {
}
export {};
