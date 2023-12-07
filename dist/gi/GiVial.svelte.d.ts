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
export type GiVialProps = typeof __propDef.props;
export type GiVialEvents = typeof __propDef.events;
export type GiVialSlots = typeof __propDef.slots;
export default class GiVial extends SvelteComponentTyped<GiVialProps, GiVialEvents, GiVialSlots> {
}
export {};
