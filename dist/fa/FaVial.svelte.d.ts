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
export type FaVialProps = typeof __propDef.props;
export type FaVialEvents = typeof __propDef.events;
export type FaVialSlots = typeof __propDef.slots;
export default class FaVial extends SvelteComponentTyped<FaVialProps, FaVialEvents, FaVialSlots> {
}
export {};
