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
export type GiSundialProps = typeof __propDef.props;
export type GiSundialEvents = typeof __propDef.events;
export type GiSundialSlots = typeof __propDef.slots;
export default class GiSundial extends SvelteComponentTyped<GiSundialProps, GiSundialEvents, GiSundialSlots> {
}
export {};
