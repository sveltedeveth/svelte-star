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
export type GiHighHeelProps = typeof __propDef.props;
export type GiHighHeelEvents = typeof __propDef.events;
export type GiHighHeelSlots = typeof __propDef.slots;
export default class GiHighHeel extends SvelteComponentTyped<GiHighHeelProps, GiHighHeelEvents, GiHighHeelSlots> {
}
export {};
