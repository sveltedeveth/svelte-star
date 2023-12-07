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
export type GiEvilBookProps = typeof __propDef.props;
export type GiEvilBookEvents = typeof __propDef.events;
export type GiEvilBookSlots = typeof __propDef.slots;
export default class GiEvilBook extends SvelteComponentTyped<GiEvilBookProps, GiEvilBookEvents, GiEvilBookSlots> {
}
export {};
