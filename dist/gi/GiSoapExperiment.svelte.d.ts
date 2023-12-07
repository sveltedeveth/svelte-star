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
export type GiSoapExperimentProps = typeof __propDef.props;
export type GiSoapExperimentEvents = typeof __propDef.events;
export type GiSoapExperimentSlots = typeof __propDef.slots;
export default class GiSoapExperiment extends SvelteComponentTyped<GiSoapExperimentProps, GiSoapExperimentEvents, GiSoapExperimentSlots> {
}
export {};
