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
export type GiThirdEyeProps = typeof __propDef.props;
export type GiThirdEyeEvents = typeof __propDef.events;
export type GiThirdEyeSlots = typeof __propDef.slots;
export default class GiThirdEye extends SvelteComponentTyped<GiThirdEyeProps, GiThirdEyeEvents, GiThirdEyeSlots> {
}
export {};
