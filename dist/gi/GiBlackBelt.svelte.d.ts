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
export type GiBlackBeltProps = typeof __propDef.props;
export type GiBlackBeltEvents = typeof __propDef.events;
export type GiBlackBeltSlots = typeof __propDef.slots;
export default class GiBlackBelt extends SvelteComponentTyped<GiBlackBeltProps, GiBlackBeltEvents, GiBlackBeltSlots> {
}
export {};
