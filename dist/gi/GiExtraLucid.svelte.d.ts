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
export type GiExtraLucidProps = typeof __propDef.props;
export type GiExtraLucidEvents = typeof __propDef.events;
export type GiExtraLucidSlots = typeof __propDef.slots;
export default class GiExtraLucid extends SvelteComponentTyped<GiExtraLucidProps, GiExtraLucidEvents, GiExtraLucidSlots> {
}
export {};
