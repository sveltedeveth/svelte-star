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
export type GiTeapotProps = typeof __propDef.props;
export type GiTeapotEvents = typeof __propDef.events;
export type GiTeapotSlots = typeof __propDef.slots;
export default class GiTeapot extends SvelteComponentTyped<GiTeapotProps, GiTeapotEvents, GiTeapotSlots> {
}
export {};
