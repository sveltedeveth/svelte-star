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
export type GiDecapitationProps = typeof __propDef.props;
export type GiDecapitationEvents = typeof __propDef.events;
export type GiDecapitationSlots = typeof __propDef.slots;
export default class GiDecapitation extends SvelteComponentTyped<GiDecapitationProps, GiDecapitationEvents, GiDecapitationSlots> {
}
export {};
